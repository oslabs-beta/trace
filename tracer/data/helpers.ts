type FormattedData = {
    [key: string]: any;
}

const helpers = {
    format: (data: Object) => {
        const formattedData: FormattedData = {};
        const count: FormattedData = {};
        const average: FormattedData = {};

        for (let obj of data) {
            
            // Grabbing the root name of each metric object
            let objKeys = Object.keys(obj);
            let rootName = objKeys[0];
            
            // Check if formattedData already has a key for this root name
            if (!formattedData.hasOwnProperty(rootName)) {
                formattedData[rootName] = [];
            }
            formattedData[rootName].push(obj);

            // Loop through the obj's values
            for (let key in obj) {
                // Check that the key exists in count and add to count accordingly
                if (!count.hasOwnProperty(key)) {
                    count[key] = 0;
                }
                count[key]++;
                // Check that the key exist in averages and add its value to the "average" (sum)
                if (!average.hasOwnProperty(key)) {
                    average[key] = 0;
                }
                average[key] += obj[key];
            } 
        }

        // Loop through the average obj
        for (let key in average) {
            // For each key, divide the sum that's there by its correlating count in the count obj
            average[key] = average[key] / count[key];
        }
        
        return {
            formattedData,
            count,
            average
        };
    },
    reset: () => {
        fs.writeFileSync('../../resolverData.json', '[]');
    }
};

export default helpers;

/*
Grab all the keys from the new data object. 
ignore indexes 0 & 1 for now.
iterate starting at index[2] up until index[.length-1]
these are the resolvers that make up the query.
grab the first one and throw it into the RootQuery memory store.
pass along the changes to Count and Average.
then loop through all the queries.
if we spot a query that exists in the rootquery storage
splice that query and run it through the formatter
*/


/*
what happens when we splice?
those metrics can be subtracted from the parent query if we want.
We can take this partitioned query and pass it in to the helper.format function
as if it came in on its own.
Finally we could just record the metrics manually into their respective count and average objects.
*/
