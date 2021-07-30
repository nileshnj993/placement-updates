
const loadingGif = document.getElementById("loading");
let loading = false;
const footer = document.getElementById("footer");

const getJobsFromBackend = async()=>{
    loading = true; // enable loading gif until jobs are fetched
    const res = await fetch('https://placement-updates-mit.herokuapp.com/jobs');
    const data = await res.json();
    
    loading = false;
    return data;
}
var jobsList = document.getElementById('jobs');

const addJobsToFrontEnd = async()=>{
    const jobs = await getJobsFromBackend();
    if(!loading){
        loadingGif.innerHTML = '';
        footer.style['display'] = 'block';
    }
    jobs.forEach((job)=>{
        const div = document.createElement('div');
        div.className = 'job';
        div.innerHTML = `
            <h3>${job.title}</h3>
            <ul>
                <li><strong> Deadline: </strong> ${job.date}</li>
                <li><strong> OT Schedule: </strong> ${job.ot}
                <li><strong> Description: </strong> ${job.description}</li>
                <li><strong> CTC: </strong> ${job.ctc}</li>
            </ul>
            <a id="linkJob" href = ${job.url} target="_blank"> <div id="url" class="tags"> Apply now!</div></a>`
        jobsList.appendChild(div);
    })
}

addJobsToFrontEnd();
