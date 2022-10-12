    const today = new Date() 
    console.log(today.toDateString({ month: false }))
    
    
    console.log(today.toLocaleString('en-US', { hour12: false }))
    
    const options = {
           year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
    console.log(today.toLocaleString('cs-CS', options));
