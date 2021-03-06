const TITLES = {
  trainings: [
    ['New Courses', 'Authored'],
    ['Tot. Courses', 'Authored'],
    ['Active', 'Schedules'],
    ['Courses', 'Assigned'],
    ['Courses', 'Completed'],
    ['Courses', 'In Progress'],
  ],
  newhires: [
    ['New Emp', 'Added'],
    ['New Hire', 'Cert Auth'],
    ['New Hire', 'Cert Assigned'],
    ['New Hire', 'Cert Compl'],
    ['New Sig', 'Packets Auth'],
    ['Tog Sig', 'Packets Auth'],
    ['Sig Packets', 'Assigned'],
    ['Sig Packets', 'Completed'],
  ],
  performances: [
    ['New\nScorecards', 'Authored'],
    ['Tot', 'Scorecards Authored'],
    ['Users\nwith', 'Scorecards'],
    ['Reviews', 'Completed'],
    ['Average', 'Score'],
    ['New Commitments', 'Set'],
    ['Commitments', 'Completed'],
  ],
  tasks: [
    ['Tasks', 'Assigned'],
    ['Tasks', 'Completed'],
    ['Avg Days', 'to Complete'],
    ['Daily Habit', 'Completion'],
    ['Weekly Habit', 'Completion'],
    ['Monthly Habit', 'Completion'],
  ],
  careers: [
    ['New Careers', 'Authored'],
    ['Total Careers', 'Authored'],
    ['Users with', 'Careers'],
    ['Users', 'Progressing'],
    ['User w/Possible', 'Promotion'],
    ['User Promotions', 'Achieved'],
  ],
  records: [
    ['Total', 'Employees'],
    ['Habit Schedule', 'Assigned'],
    ['Scorecard', 'Assigned'],
    ['Certificates', 'Assigned'],
    ['Career Program', 'Assigned'],
    ['Packets', 'Assigned'],
    ['Tasks', 'Assigned'],
    ['Courses', 'Assigned'],
  ],
  users: [
    ['Total', 'Recruit'],
    ['Total', 'Terminated'],
    ['Total', 'Employees'],
    ['Permission', 'User'],
    ['Permission', 'Manager'],
    ['Permission', 'Admin'],
    ['Employees', 'Added'],
    ['Logged in', 'Employees'],
  ],
}

const KEYS = {
  trainings: [
    'new_courses',
    'total_courses',
    'active_schedules',
    'courses_assigned',
    'courses_completed',
    'courses_in_progress',
  ],
  newhires: [],
  performances: [
    'new_scorecards',
    'total_scorecards',
    'user_scorecards',
    'reviews',
    'average_score',
    'new_commitments',
    'completed_commitments',
  ],
  tasks: [
    'tasks_assigned',
    'tasks_completed',
    'avg_days',
    'daily_completion',
    'weekly_completion',
    'monthly_completion',
  ],
  careers: ['new_careers', 'total_careers', 'users_careers', 'users_progress', 'possible_promotion', 'promotions'],
  records: [
    'total_employees',
    'habit_schedules',
    'scorecards',
    'certificates',
    'careers',
    'packets_assigned',
    'tasks',
    'courses',
  ],
  users: ['recruit', 'terminated', 'total_employees', 'user_count', 'manager_count', 'admin_count', 'added', 'logged'],
}

export { TITLES, KEYS }
