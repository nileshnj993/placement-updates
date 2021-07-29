// const blogs = document.getElementById("blogs");
const loadingGif = document.getElementById("loading");
let loading = false;

const getJobsFromBackend = async()=>{
    loading = true; // enable loading gif until videos are fetched
    const res = await fetch('http://localhost:8000/jobs');
  
    const data = await res.json();
    
    loading = false;
    return data;
}
var jobsList = document.getElementById('jobs');

const addJobsToFrontEnd = async()=>{
    const jobs = await getJobsFromBackend();
    if(!loading){
        loadingGif.innerHTML = '';
    }
    jobs.forEach((job)=>{
        const div = document.createElement('div');
        div.className = 'job';
        div.innerHTML = `
            <h3> ${job.title}</h3>
            <ul>
                <li><strong> Deadline: </strong> ${job.date}</li>
                <li><strong> OT Schedule: </strong> ${job.ot}
                <li><strong> Description: </strong> ${job.description}</li>
                <li><strong> CTC: </strong> ${job.ctc}</li>
            </ul>
            <div id="url" class="tags"> <a id="linkJob" href = ${job.url}> Apply now!</div>`
        jobsList.appendChild(div);
    })
}

addJobsToFrontEnd();
