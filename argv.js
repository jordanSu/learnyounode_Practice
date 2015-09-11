var total = 0;
for (i in process.argv) {
    if (i >= 2)
        total += Number(process.argv[i]);
}
console.log(total);
