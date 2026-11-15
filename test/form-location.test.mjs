import test from 'node:test';
import assert from 'node:assert/strict';
import { addressFromNominatim, addressFromPhoton, reverseAddress } from '../src/scripts/form-location.js';
test('Lithuanian address uses road + number + settlement, not full administrative display_name', () => {
  assert.equal(addressFromNominatim({address:{road:'Pagirių g.',house_number:'24',village:'Pagiriai',county:'Garliavos apylinkių seniūnija'}}),'Pagirių g. 24, Pagiriai');
  assert.equal(addressFromPhoton({features:[{properties:{street:'Miško g.',housenumber:'2',city:'Kaunas'}}]}),'Miško g. 2, Kaunas');
  assert.equal(addressFromNominatim({address:{village:'Pagiriai'}}),'Pagiriai');
  assert.equal(addressFromNominatim({}), '');
});
test('reverse lookup coalesces simultaneous requests, caches success and requests Lithuanian', async () => {
  let calls=0;
  const fetchImpl=async url=>{calls++;assert.ok(url.includes('accept-language=lt'));return {ok:true,json:async()=>({address:{road:'Gatvė',house_number:'7',town:'Miestelis'}})}};
  const values=await Promise.all([reverseAddress(54.80883,23.87446,{fetchImpl}),reverseAddress(54.80883,23.87446,{fetchImpl})]);
  assert.deepEqual(values,['Gatvė 7, Miestelis','Gatvė 7, Miestelis']);
  assert.equal(await reverseAddress(54.80883,23.87446,{fetchImpl}),values[0]);assert.equal(calls,1);
});
test('empty/error primary response falls back to Photon; total failure never returns coordinate text', async () => {
  let calls=0;
  const value=await reverseAddress(54.8,23.8,{fetchImpl:async url=>{calls++;return {ok:true,json:async()=>url.includes('nominatim')?{error:'no address'}:{features:[{properties:{street:'A g.',city:'Kaunas'}}]}}}});
  assert.equal(value,'A g., Kaunas');assert.equal(calls,2);
  assert.equal(await reverseAddress(54.9,23.9,{fetchImpl:async()=>{throw Error('offline')}}),'');
});
test('requests time out and malformed coordinates never reach providers', async () => {
  const fetchImpl=async (url,{signal})=>new Promise((_,reject)=>signal.addEventListener('abort',()=>reject(Error('timeout'))));
  assert.equal(await reverseAddress(55,24,{fetchImpl,timeoutMs:5}),'');
  assert.equal(await reverseAddress(NaN,24,{fetchImpl:()=>assert.fail('must not fetch')}),'');
});
