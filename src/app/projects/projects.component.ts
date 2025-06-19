import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, height: '*', padding: '*', margin: '*' })),
      state('out', style({ opacity: 0, height: '0px', padding: '0px', margin: '0px' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: '"Digi Office" (HR management and payroll product)"',
      icon: 'bi-person-badge-fill',
      shortDesc: 'HR and payroll automation using Angular, .NET, and MS SQL Server.',
      fullDesc: `
        <p>Designed and developed a comprehensive HR management and payroll system, <strong>"Digi Office"</strong>, to streamline HR processes and payroll computation for organizations.</p>
        <p>The system comprises multiple modules, including:</p>
        <ul>
          <li><strong>Attendance Management:</strong> Tracking employee attendance, including regular hours, overtime, and absences</li>
          <li><strong>Overtime Management:</strong> Calculating and approving overtime requests</li>
          <li><strong>Leaves Management:</strong> Tracking and approving employee leave requests</li>
          <li><strong>Loan Management:</strong> Managing employee loan requests and repayments</li>
          <li><strong>Payroll Computation:</strong> Automating payroll processing, including salary calculations, deductions, and tax compliance</li>
        </ul>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Modular design allowing easy maintenance and updates</li>
          <li>User-friendly interface for easy navigation and data entry</li>
          <li>Automated workflows for attendance, leave, and loan requests</li>
          <li>Customizable reports and analytics for HR and management insights</li>
          <li>Integration with existing HR systems and databases</li>
        </ul>
      `,
      github: 'https://github.com/yourusername/hr-payroll-system',
      showFull: false
    },
    {
      title: 'E-commerce Web Application for online purchase  ',
      icon: 'bi-cart-fill',
      shortDesc: 'Scalable e-commerce platform with Angular, .NET Core, and SQL Server.',
      fullDesc: `
        <p><strong>Project:</strong> E-commerce Web Application</p>
        <p><strong>Technologies:</strong> Angular, JavaScript, TypeScript, SQL Server, RESTful API, .NET Core</p>
        <p><strong>Description:</strong></p>
        <p>Designed and developed a scalable e-commerce web application using Angular, JavaScript, and TypeScript. The application features a responsive UI/UX design, allowing users to browse and purchase products seamlessly.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Implemented a RESTful API using .NET Core to manage product catalog, orders, and customer data</li>
          <li>Integrated API with Angular frontend, utilizing TypeScript for type safety and maintainability</li>
          <li>Utilized SQL Server to design and manage database schema, ensuring data consistency and performance</li>
          <li>Implemented authentication and authorization using JSON Web Tokens (JWT)</li>
          <li>Developed a responsive and mobile-friendly UI/UX design, ensuring a smooth user experience across devices</li>
        </ul>
      `,
      github: 'https://github.com/yourusername/ecommerce-web-app',
      showFull: false
    },
    {
      title: 'FMS - Facility Management System',
      icon: 'bi-building-fill-gear',
      shortDesc: 'Streamlined facility operations with modules for asset, tenant, vendor, and energy management.',
      fullDesc: `
        <p><strong>Project:</strong> FMS - Facility Management System</p>
        <p><strong>Technologies:</strong> Angular, JavaScript, TypeScript, SQL Server, RESTful API, .NET Core</p>
        <p><strong>Description:</strong></p>
        <p>Designed and developed a comprehensive Facility Management System, <strong>"FMS"</strong>, to streamline facility-related operations and workflows for buildings. The system features:</p>
        <ul>
          <li><strong>Asset Management:</strong> Tracking and managing facility assets, including equipment and furniture</li>
          <li><strong>Maintenance Management:</strong> Scheduling and tracking maintenance requests and work orders</li>
          <li><strong>Space Management:</strong> Managing facility space, including room bookings and allocations</li>
          <li><strong>Energy Management:</strong> Monitoring and optimizing energy consumption and costs</li>
          <li><strong>Helpdesk Management:</strong> Managing facility-related requests and issues</li>
          <li><strong>Tenant Management:</strong> Managing tenant information, leases, and rent payments</li>
          <li><strong>Vendor Management:</strong> Managing vendor information, contracts, and inventory supplies</li>
          <li><strong>Announcement Notification:</strong> Sending notifications to tenants, vendors, and facility staff</li>
          <li><strong>Reporting and Analytics:</strong> Providing insights into facility performance and trends</li>
        </ul>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>User-friendly interface for easy facility, asset, tenant, and vendor management</li>
          <li>Automated workflows for maintenance requests, work orders, energy monitoring, and rent payments</li>
          <li>Customizable reporting and analytics for facility optimization</li>
          <li>Mobile accessibility for on-the-go facility management</li>
          <li>Email and SMS notifications for announcements, rent reminders, and maintenance schedules</li>
        </ul>
      `,
      github: 'https://github.com/yourusername/facility-management-system',
      showFull: false
    }
    
    
  ];
  
  toggleDetails(index: number): void {
    this.projects[index].showFull = !this.projects[index].showFull;
  }
  
  ngOnInit() {
    AOS.init({
      duration: 0.1,  // Animation duration
      offset: 200,     // Scroll offset for triggering the animation
      once: true,      // Ensure animation runs once when it enters the viewport
    });
  }
}

