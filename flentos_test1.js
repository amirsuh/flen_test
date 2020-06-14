function findCost(cost, n) {

     cost = cost.sort() 
     fullCost = 0
  
  for (let i = n - 1; i > 1; i -= 2){
  
            if (i == 2) 
            { 
                fullCost += cost[2] + cost[0]; 
            } 
            else
            { 
      
                // Both the ways as discussed above 
                 let price_first = cost[i] + cost[0] + 2 * cost[1]; 
                 let price_second = cost[i] + cost[i - 1] + 2 * cost[0]; 
                fullCost += Math.min(price_first, price_second); 
            } 
  
  }
        if (n == 1) 
        { 
            fullCost += cost[0]; 
        } 
        else
        { 
            fullCost += cost[1]; 
        } 
      
        return fullCost;
}
cost = [300,400,600,700] 
n = cost.length 
findCost(cost,n)