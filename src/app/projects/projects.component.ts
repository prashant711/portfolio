import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
   
    {
      title: 'Core HR - Payroll Management System',
      icon: 'bi-person-badge-fill',
      shortDesc: 'HR and payroll automation using Angular, .NET, and MS SQL Server.',
      fullDesc: `Developed a Core HR module integrated with Digi Office to automate payroll processing, attendance tracking, leave management, OT calculations, employee onboarding, separation, and reporting. 
  • Used Angular, MS SQL Server, and REST APIs to enable real-time HR operations and seamless workforce management.
  • Developed dynamic UI components using Angular to manage payroll activities such as salary calculations, attendance tracking, and leave management, providing a seamless user experience for HR and employees.
  • Designed and optimized complex SQL queries to automate payroll processes, enabling accurate real-time calculations for salaries, taxes, and deductions based on attendance and leave data.
  • Built and integrated RESTful APIs with MS SQL Server for secure and efficient payroll data management, ensuring smooth communication between the frontend and backend systems for real-time payroll updates and reporting.`,
      github: 'https://github.com/yourusername/hr-payroll-system'
    },
    {
      title: 'Voiladoc Healthcare App',
      icon: 'bi-heart-pulse-fill',
      shortDesc: '24/7 healthcare app with Angular frontend, .NET APIs, and MS SQL Server.',
      fullDesc: `Voiladoc is a healthcare application that connects licensed professionals 24/7. Patients can consult doctors, request home visits, manage medical records securely, and explore a marketplace for healthcare services (hospitals, pharmacies, diagnostics, nurses, insurance).
  • Built dynamic UI components in Angular to facilitate doctor appointments, home visits, and marketplace browsing, ensuring a seamless cross-device experience.
  • Optimized SQL queries for efficient data retrieval and manipulation, enhancing the management of healthcare providers, appointments, and patient records.
  • Developed and integrated RESTful APIs with MS SQL Server to securely manage patient records, appointments, and provider communications in real time.
  • Designed and implemented APIs in .NET, ensuring smooth data exchange between the front end and backend.
  • Enforced data security measures to comply with healthcare regulations, safeguarding patient privacy.`,
      github: 'https://github.com/yourusername/voiladoc-healthcare-app'
    },
    {
      title: 'Learning Management System (LMS)',
      icon: 'bi-mortarboard-fill',
      shortDesc: 'Role-based training platform with assessments and certifications.',
      fullDesc: `Designed and implemented a Learning Management System supporting Admin, Manager, Trainer, and Employee roles.
    • Admin creates categories, staff profiles, trainers, and topics, then assigns topics to trainers.
    • Trainers create detailed content and assessments tied to their assigned topics.
    • Managers assign training to employees who accept, complete training, and attempt assessments.
    • Implemented dynamic certificate generation on successful completion of assessments.
    • Built using Angular for front-end, .NET for backend logic, and MS SQL Server for data handling.
    • Features include role-based dashboards, assessment tracking, certificate generation, and training history overview.`,
      github: 'https://github.com/yourusername/learning-management-system'
    },
    {
      title: 'Performance Management System (PMS)',
      icon: 'bi-graph-up-arrow',
      shortDesc: 'End-to-end appraisal and KPI tracking with goal assignment.',
      fullDesc: `Developed a Performance Management System featuring appraisal cycle management, goal setting, and rating workflows.
    • HR configures appraisal cycles, KPIs, core values, and organizational goals.
    • Managers assign employee-specific goals and initiate the self-assessment process.
    • Employees provide self-ratings, followed by manager ratings and final HR review.
    • Integrated PIP (Performance Improvement Plan) workflow for low-rated employees (<2) with final rating submission.
    • Built using Angular for UI, .NET backend for business logic, and MS SQL Server for data storage and workflow automation.
    • Role-based controls, approval tracking, and notification systems included to streamline appraisals.`,
      github: 'https://github.com/yourusername/performance-management-system'
    }
    
    
  ];

  ngOnInit() {
    AOS.init({
      duration: 0.1,  // Animation duration
      offset: 200,     // Scroll offset for triggering the animation
      once: true,      // Ensure animation runs once when it enters the viewport
    });
  }
}

