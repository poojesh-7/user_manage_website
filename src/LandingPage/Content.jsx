import "./Content.css";
const Content = () => {
  const employees = [
    {
      name: "Jose venpt",
      email: "josevmpt32@gmail.com",
      role: "Employee",
      taskStatus: "grey",
    },
    {
      name: "Ram Ling",
      email: "RamLinf2@gmail.com",
      role: "Employee",
      taskStatus: "grey",
    },
    {
      name: "Mukesh",
      email: "Mukesh23@gmail.com",
      role: "Employee",
      taskStatus: "green",
    },
    {
      name: "Ramkli Polsa",
      email: "ram98@gmail.com",
      role: "Employee",
      taskStatus: "red",
    },
    {
      name: "Jlopija",
      email: "jlopija8@gmail.com",
      role: "Employee",
      taskStatus: "red",
    },
    {
      name: "Suresh",
      email: "sur67@gmail.com",
      role: "Employee",
      taskStatus: "green",
    },
    {
      name: "Jiolska",
      email: "jiols12@gmail.com",
      role: "Employee",
      taskStatus: "green",
    },
    {
      name: "Robert",
      email: "robert@gmail.com",
      role: "Employee",
      taskStatus: "red",
    },
    {
      name: "Darshan",
      email: "darsh83@gmail.com",
      role: "Employee",
      taskStatus: "red",
    },
  ];
  const dispEmployees = employees.map((emp, i) => (
    <tr key={i}>
      <td>{emp.name}</td>
      <td className="lg_sc">{emp.email}</td>
      <td>{emp.role}</td>
      <td>
        <button className={`disp_btn ${emp.taskStatus}`}>View</button>
      </td>
    </tr>
  ));
  return (
    <div className="content_section">
      <h1>Streamlined User Management</h1>
      <p>
        Add, manage, and organize employees with ease. Control roles, access,
        and permissions securely. Assign tasks in seconds, set deadlines, and
        monitor progress in real-time.
      </p>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th className="lg_sc">Email</th>
            <th>Role</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody id="employee-table-body">{dispEmployees}</tbody>
      </table>
    </div>
  );
};

export default Content;
