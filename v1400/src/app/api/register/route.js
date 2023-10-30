//1. Import area


//2. Defination area
export async function POST(request){
    //Recive the payload
    const res = await request.json();

    //Call the Strapi API
        //fucntion(actualArg1,actualArg2,...)
    const res2 = await fetch(process.env.STRAPI_BASE_URL+'/api/auth/local/register',{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json' // Specify that you're sending JSON data
                                },
                                body: JSON.stringify(res)
                            });
    const data = await res2.json()


    // Return statement
    return Response.json({
                            msg:"Hi",
                            data:res,
                            data2:data
                        });
}


//3. Export

//3.2 Named Export
//module.exports = { Property:Value }
//module.exports = { "POST":POST }