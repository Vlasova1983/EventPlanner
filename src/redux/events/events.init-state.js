import data from "../../data/data.json";

export const eventsInitState = {
  data:JSON.parse(localStorage.getItem('events')) || data,
  filter:JSON.parse(localStorage.getItem('filter')) ||  '',
  isActivPage: JSON.parse(localStorage.getItem('page')) || 1,
  arrayPage:JSON.parse(localStorage.getItem('paginator')) || []
};

