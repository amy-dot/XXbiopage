const workouts = {

  soccer: {
    title: 'Soccer Workout',
    focus: 'Focus: Speed, stamina, and leg strength',
    exercises: [
      '10 min jog',
      'Sprint intervals',
      'Lunges',
      'Calf raises',
      'Cone dribbling drills',
      'Stretching cooldown'
    ]
  },

  football: {
    title: 'Football Workout',
    focus: 'Focus: Strength and explosiveness',
    exercises: [
      'Dynamic stretching',
      'Deadlifts',
      'Bench press',
      'Power cleans',
      'Sled pushes',
      'Mobility cooldown'
    ]
  },

  track: {
    title: 'Track Workout',
    focus: 'Focus: Speed and endurance',
    exercises: [
      '800m warm-up jog',
      '200m sprint repeats',
      'Jump squats',
      'Hill sprints',
      'Core exercises',
      'Cooldown stretches'
    ]
  }
};

function showWorkout(sport) {
  document.getElementById('title').innerText = workouts[sport].title;
  document.getElementById('focus').innerText = workouts[sport].focus;

  const list = document.getElementById('workoutList');
  list.innerHTML = '';

  workouts[sport].exercises.forEach((exercise, index) => {
    const li = document.createElement('li');

    li.className = 'workout-item rounded-2xl p-4 flex items-center gap-3';

    li.innerHTML = `
      <div class="number-circle">
        ${index + 1}
      </div>
      <span>${exercise}</span>
    `;

    list.appendChild(li);
  });

  const buttons = document.querySelectorAll('.sport-btn');

  buttons.forEach(btn => {
    btn.classList.remove('active-btn');
  });

  const clickedButton = Array.from(buttons).find(btn =>
    btn.textContent.trim().toLowerCase() === sport
  );

  if (clickedButton) {
    clickedButton.classList.add('active-btn');
  }
}

