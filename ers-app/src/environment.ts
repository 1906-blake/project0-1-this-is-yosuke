const dev = {
    context: 'http://localhost:8012'
}

// Apparently, this particular variable pertains to a 'professional' product, but this 
// 'beanstalk' need not be deployed...for now.
const prod = {
    context: 'http://cards-api.ppdksbfn6d.us-east-2.elasticbeanstalk.com'
}

export let environment = dev;

console.log(process.env.REACT_APP_ENV);

if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENV === 'production') {
    environment = prod;
}