import { useState } from "react";
import "./reports.css";
import { useSelector } from "react-redux";

const Reports = () => {
  const { employeesArr } = useSelector((state) => state.employees);
  const { tasksArr } = useSelector((state) => state.tasks);
  const { epicArr } = useSelector((state) => state.epic);

  //Empoloyees report
  let totalEmploy = employeesArr.filter((e) => e.employee.fullName).length;

  // 5 employees completed the most tasks

  let emp = tasksArr.filter((t) => t.taskStatus !== "Complited");
  console.log(emp);

  // let name = emp.filter((t) => t.assignee);
  // console.log(name);

  // Tasks report
  let total = tasksArr.filter((t) => t.taskStatus).length;
  let toDo = tasksArr.filter((t) => t.taskStatus === "To do").length;
  let InProgress = tasksArr.filter(
    (t) => t.taskStatus === "In progress"
  ).length;
  let completed = tasksArr.filter((t) => t.taskStatus === "Completed").length;

  // Epic report
  let totalEpic = epicArr.filter((e) => e.status).length;
  let toDoEpic = epicArr.filter((e) => e.status === "To do").length;
  let InProgressEpic = epicArr.filter((e) => e.status === "In progress").length;
  let completedEpic = epicArr.filter((e) => e.status === "Completed").length;

  return (
    <section className="section-report ">
      <h2 className="rep-heading fs-1">Reports</h2>
      <div className="report-container">
        <div className="report-employee">
          <h3 className="report-employee-heading fs-2">Employees report</h3>
          <p className="report-employee-title fs-4">
            Total employees:
            <span className="report-employee-sum fs-4">{totalEmploy}</span>
          </p>
          <ul className="report-employees-lists">
            <li className="report-employee-list">
              <p className="report-employee-title title__five fs-4">
                5 employees completed the most tasks:
              </p>
              <div className="five-employee-box-title">
                <p className="report-employee-names fs-4">Full name</p>
                <p className="report-employee-tasks fs-4">Total completed tasks</p>
              </div>
              <div className="five-employee-box">
                {/* <p class="report-employee-names fs-4">{empl.name}</p>
                <p class="report-employee-tasks fs-4">{sortedArray[i][1]}</p> */}
              </div>
            </li>
          </ul>
        </div>
        {/* Tasks */}

        <div className="report-task">
          <h3 className="report-task-heading fs-2">Tasks report</h3>
          <p className="report-task-title fs-4">
            Total completed:
            <span className="report-task-sum report__task-completed fs-4">
              {completed}
            </span>
          </p>
          <p className="report-task-title fs-4">
            Total in progress:
            <span className="report-task-sum report__task-inprogress fs-4">
              {InProgress}
            </span>
          </p>
          <p className="report-task-title fs-4">
            Total to do:
            <span className="report-task-sum report__task-todo fs-4">{toDo}</span>
          </p>

          <p className="report-task-title fs-4">
            Total tasks:
            <span className="report-task-sum report__task-total fs-4">{total}</span>
          </p>
        </div>

        <div className="report-epic">
          <h3 className="report-epic-heading fs-2">Epics report</h3>
          <p className="report-epic-title fs-4">
            Total completed:
            <span className="report-epic-sum report__epic-completed fs-4">
              {completedEpic}
            </span>
          </p>
          <p className="report-epic-title fs-4">
            Total in progress:
            <span className="report-epic-sum report__epic-inprogress fs-4">
              {InProgressEpic}
            </span>
          </p>
          <p className="report-epic-title fs-4">
            Total to do:
            <span className="report-epic-sum report__epic-todo fs-4">
              {toDoEpic}
            </span>
          </p>
          <p className="report-epic-title fs-4">
            Total epic completed:
            <span className="report-epic-sum report__epic-total fs-4">
              {totalEpic}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reports;
