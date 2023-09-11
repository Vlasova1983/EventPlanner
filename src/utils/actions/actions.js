export const onSort = (sort, ...events) => {  
  const { name, id } = sort;
  let sortEvents = [];
  if (name === 'title') {
    sortEvents = events.sort((x, y) => {        
      if (x.title < y.title) {        
        return -1;
      }
      if (x.title > y.title) {          
        return 1;
      }       
      return 0
    });     
  }

  if (name === 'date') {
    sortEvents = events.sort((x, y) => {
      if (x.date < y.date) {
        return -1;
      }
      if (x.date > y.date) {
        return 1;
      }
      return 0
    });
  }

  if (name === 'priority') {
    sortEvents = events.sort((x, y) => {
      if (x.priority < y.priority) {
        return -1;
      }
      if (x.priority > y.priority) {
        return 1;
      }
      return 0
    });
  }

  if (id === "down") {
    return sortEvents.reverse();
  } else {
    return sortEvents;
  }    
}; 


