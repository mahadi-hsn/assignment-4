let currentTab = "all";
const tabActive = ["bg-blue-950", , "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-800"];

const all_jobs = document.getElementById("job-container");
const interview_section = document.getElementById("interview_section");
const rejected_section = document.getElementById("rejected_section");
const emptyState = document.getElementById("empty_state");

function switchTab(tab) {
  currentTab = tab;
  const tabs = ["all", "interview", "reject"];

  for (const t of tabs) {
    const tabName = document.getElementById(t + "_tab");

    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }

  const pages = [all_jobs, interview_section, rejected_section];
  for (const section of pages) {
    section.classList.add("hidden");
  }

  emptyState.classList.add("hidden");

  if (tab === "all") {
    all_jobs.classList.remove("hidden");
    if (all_jobs.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interview_section.classList.remove("hidden");
    if (interview_section.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejected_section.classList.remove("hidden");
    if (rejected_section.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  countJob();
}

// Counting jobs
const all = document.getElementById("total_jobs");
const interview = document.getElementById("total_interview");
const reject = document.getElementById("total_reject");
const availableJobs = document.getElementById("available_jobs");

switchTab(currentTab);
function countJob() {
  const counts = {
    all: all_jobs.children.length,
    interview: interview_section.children.length,
    reject: rejected_section.children.length,
  };

  all.innerText = counts.all;
  interview.innerText = counts.interview;
  reject.innerText = counts.reject;
  availableJobs.innerText = counts[currentTab];

  if(counts[currentTab] < 1){
          emptyState.classList.remove("hidden");
  }
  else{
          emptyState.classList.add("hidden");
  }
}
countJob();

// Delegate events
document.getElementById("jobs_section").addEventListener("click", function (e) {
  const targetElement = e.target;
  const cardContainer = targetElement.closest(".jod_cards");
  if (!cardContainer) {
    return;
  }

  
  const status = cardContainer.querySelector(".job-status");
  const parent = cardContainer.parentNode;

  if (targetElement.classList.contains("interview")) {
    status.classList.remove('hidden')
    status.innerText = "Interviewed";
    interview_section.appendChild(cardContainer);
    countJob();
  } else if (targetElement.classList.contains("reject")) {
    status.classList.remove('hidden')
    status.innerText = "Rejected";
    rejected_section.appendChild(cardContainer);
    countJob();
  } else if (targetElement.classList.contains("delete")) {
    parent.removeChild(cardContainer);
    countJob();
  }
});
