
module.exports={
    async afterCreate(event){
        const {result} = event;
        try{
           await  strapi.plugins['email'].services.email.send({
                to: 'liana.tonian@gmail.com',
                from:'info@mayro.io',
                subject: 'Test Email',
                text:`name:${result.full_name}
                phone:${result.phone}
                email:${result.email}
                message:${result.message}
                company:${result.company}
                cv:${result.images}
                `,
              
    
            })
        }catch(err){
            console.log(err)
        }
       
}
  
}