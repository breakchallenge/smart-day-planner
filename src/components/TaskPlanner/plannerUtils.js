export const simulateLLMResponse = (taskList) => {
  // Sort tasks based on simulated priorities
  const outdoor = [];
  const work = [];
  const family = [];
  const other = [];

  taskList.forEach(task => {
    const lowerTask = task.toLowerCase();
    if (lowerTask.includes('run') || lowerTask.includes('walk') || lowerTask.includes('mow') || lowerTask.includes('garden') || lowerTask.includes('bike')) {
      outdoor.push(task);
    } else if (lowerTask.includes('meeting') || lowerTask.includes('work') || lowerTask.includes('email') || lowerTask.includes('call') || lowerTask.includes('prepare')) {
      work.push(task);
    } else if (lowerTask.includes('kid') || lowerTask.includes('child') || lowerTask.includes('daughter') || lowerTask.includes('son') || lowerTask.includes('family')) {
      family.push(task);
    } else {
      other.push(task);
    }
  });

  // Create a schedule based on time of day
  const schedule = [];
  let currentHour = 9; // Start at 9 AM

  // Work tasks in the morning
  work.forEach(task => {
    schedule.push({
      time: `${currentHour}:00${currentHour < 12 ? 'AM' : 'PM'}`,
      task,
      reason: "Priority work task scheduled during peak productivity hours."
    });
    currentHour += 2;
  });

  // Outdoor tasks in the afternoon if possible
  outdoor.forEach(task => {
    schedule.push({
      time: `${currentHour > 12 ? currentHour - 12 : currentHour}:00${currentHour < 12 ? 'AM' : 'PM'}`,
      task,
      reason: "Outdoor activities grouped together in the afternoon when it's typically warmer."
    });
    currentHour += 1;
  });

  // Family tasks later in the day
  family.forEach(task => {
    schedule.push({
      time: `${currentHour > 12 ? currentHour - 12 : currentHour}:00${currentHour < 12 ? 'AM' : 'PM'}`,
      task,
      reason: "Family tasks scheduled for when family members are likely to be available."
    });
    currentHour += 2;
  });

  // Other tasks fit in remaining slots
  other.forEach(task => {
    schedule.push({
      time: `${currentHour > 12 ? currentHour - 12 : currentHour}:00${currentHour < 12 ? 'AM' : 'PM'}`,
      task,
      reason: "Non-urgent task scheduled after priorities have been addressed."
    });
    currentHour += 1;
  });

  return {
    schedule,
    explanation: "I've organized your day to prioritize work tasks during peak productivity hours, grouped outdoor activities together, and scheduled family-related tasks for when family members are likely to be available."
  };
};