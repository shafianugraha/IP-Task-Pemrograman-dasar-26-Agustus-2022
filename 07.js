const oddNumbers = () => {
    const ans = [];
    for (let i = 1; i<= 100; i++) {
        if (i%2 !== 0) {
            ans.push(i)
        }
    }
    console.log(ans);
}

oddNumbers()