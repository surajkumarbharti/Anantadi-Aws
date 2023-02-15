 
//**************************    Aws lamda function and API Gateway  *****************************/


// firstly  Open the AWS Management Console and go to the Lambda service.

// Click on the "Create Function" button.

// Select the "Author from scratch" option and give my function name is gettodo.

// Choose the runtime as "Node.js" .

// Select the "Create a new role with basic Lambda permissions".

// Click on the "Create Function" button.


//  write the code for your GET API.


export const handler = async (event) => {
    const products = [
        { id: 1, name: 'smart phone' },
        { id: 2, name: 'cloths' },
        { id: 3, name: 'shoes' }
    ];

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    };

    return response;
};

// Test your Lambda function by clicking on the "Test" button and entering the test event data.

// Once i have tested my function, them i am  deploy it by clicking on the "Deploy" button.

// last my  Lambda function is now ready to be integrated with other AWS services or used as a standalone API endpoint.





//////***********************    Opensearch Service  ***** *******************////////

// last connect with openSearch Service and 1st create a Domain and the Domain Name is "hello" , version is 7.10 .

// 1) Domain Name: hello.
// 2) version : 7.10.
// 3) Engine : Elasticsearch.
// 4) Status : Active. 
// 5) Endpoint : Internet . 
// 6)Cluster health : Green .
// 7) Searchable documents : 9.
// 8)Total free space : 23.19 Gib . 
// 9)Minimum free space : 7.73 Gib. 
// 10)  Update status : up to date . 
// 11) UltraWarm storage : Disabled . 
// 12) Cold storage : Disabled 