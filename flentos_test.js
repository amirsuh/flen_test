// Function to return the minimum cost 
function findCost(cost, n) {
    // Sort the price array 
    cost = cost.sort()
    fullCost = 0

    //Calcualte minimum price 
    //of n-2 most costly person 
    for (let i = n - 1; i > 1; i -= 2) {

        if (i == 2) {
            fullCost += cost[2] + cost[0];
        }
        else {

            // Both the ways as discussed above 
            let price_first = cost[i] + cost[0] + 2 * cost[1];
            let price_second = cost[i] + cost[i - 1] + 2 * cost[0];
            fullCost += Math.min(price_first, price_second);
        }

    }
    //Calculate the minimum price 
    //of the two cheapest person 
    if (n == 1) {
        fullCost += cost[0];
    }
    else {
        fullCost += cost[1];
    }

    return fullCost;
}

//call a function. 
cost = [300, 400, 600, 700]
n = cost.length
findCost(cost, n)