const githubRepo = "https://github.com/coollearnerboop565/realisimmodgeofs/edit/main/main.json";
const realisimversion = `0.1`;
const developstage = true 

(function init() {

    
    fetch(`${githubRepo}/styles.css?`+Date.now()).then(async data => {
        const styleTag = createTag('style',{type:'text/css'});
        styleTag.innerHTML = await data.text();
        document.head.appendChild(styleTag);
    });
