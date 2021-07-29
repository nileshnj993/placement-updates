const {Client} = require('@notionhq/client');

const notion = new Client({ // to setup our client which is the owner of the workspace where the database is
    auth: process.env.NOTION_TOKEN
});

const database_id = process.env.NOTION_DB_ID;

const getJobs = async()=>{ // get list of upcoming jobs
    const myJobs = await notion.databases.query({
        database_id,
        // filter:{
        //     property:"Tags",
        //     text:{
        //         contains:"Credit"
        //     }
        // }
    })
    
    var jobs = [];
    await myJobs.results.forEach((job)=>{
        // console.log(job);
        // console.log(job.properties.Description.rich_text[0].text.content);
        var deadline; 
        var otDate;
        var ctcAmount;
        
        if(job.properties.Date==undefined){
            deadline='To Be Announced';
        }
        else{
            deadline=job.properties.Date.date.start;
        }
        
        if(job.properties.ctc.rich_text.length==0){
            ctcAmount='To Be Announced';
        }
        else{
            ctcAmount=job.properties.ctc.rich_text[0].text.content;
        }

        if(job.properties.ot==undefined){
            otDate='To Be Announced';   
        }
        else{
            otDate = job.properties.ot.date.start;
        }

        
        jobs.push({
             id:job.id,
             title:job.properties.Name.title[0].text.content,
             date: deadline,
             description:job.properties.description.rich_text[0].text.content,
             ot: otDate,
             url: job.properties.URL.rich_text[0].text.content,
             ctc: ctcAmount,
        })
      
    })
    return jobs;
}

module.exports = getJobs;