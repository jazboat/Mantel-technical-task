const { log } = require('console');
const { readFile } = require('fs')


readFile('./file/programming-task-example-data.log', 'utf8', (err, data) => {
    if (err) throw err;
    var ipAdress = []
    var url = []

    var data = data.split('\n')

    for (let i =0; i < data.length; i++) {
        var IP = data[i].split(' ');
        ipAdress.push(IP[0])
    }

    for (let i =0; i < data.length; i++) {
        var url1 = data[i].split('GET')[1].split('"')[0].split(' ')[1]
        url.push(url1)
    }


    function find_duplicate_in_array(array){
        const count = {}

        array.forEach(item => {
            if (count[item]) {
                count[item] +=1
                return
            } else{
                count[item] = 1
            }
        })

        var sortable = [];

        for (var ipAdresses in count) {
            sortable.push([ipAdresses, count[ipAdresses]]);
        }
            
        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });
            
        return(sortable);

    }

    var ipDuplicates = find_duplicate_in_array(ipAdress)
    var urlDuplicates = find_duplicate_in_array(url)

    var topThreeIpAddresses = []
    var topThreeUrl = []
    var uniqueIpAddresses = ipDuplicates.length


    for (let i = 0; i < 3; i++) {
        topThreeIpAddresses.push(ipDuplicates[i])
        topThreeUrl.push(urlDuplicates[i])
    }


    // The number of unique IP addresses 
    console.log(uniqueIpAddresses);
    // The top 3 most visited URLs  
    console.log(topThreeUrl);
    // The top 3 most active IP addresses
    console.log(topThreeIpAddresses);
        

})
