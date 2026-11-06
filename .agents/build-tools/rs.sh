#!/bin/zsh
# rs.sh <outdir> <widths> <paths...>  — rebuild preview dist, then screenshot with slices
cd /Users/matasbasinskas/.ai-powerhouse/worktrees/ArbCutBetter/build-arbcut-v4-site-20261106 && PUBLIC_PREVIEW=1 npx astro build 2>&1 | grep -iE "error|\[build\] [0-9]+ page" ; out=$1; shift; w=$1; shift
rm -rf $out; cd /tmp/arbcut-tools/pw && SLICES=1 node shot.mjs http://localhost:4329 $out $w "$@"
