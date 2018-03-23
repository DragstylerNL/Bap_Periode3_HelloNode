var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
sum = sum/(process.argv.length-2);
console.log(sum);
