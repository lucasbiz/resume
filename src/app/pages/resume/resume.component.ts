import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  location: string;
  positions: {
    title: string;
    type: string;
    period: string;
    description: string;
  }[];
}

interface Education {
  degree: string;
  institution: string;
  status: string;
}

interface Certification {
  name: string;
  issuer: string;
  issued: string;
}

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  experiences: Experience[] = [
    {
      company: 'VisãoGeo',
      location: 'Florianópolis, Santa Catarina, Brazil',
      positions: [
        {
          title: 'IT Assistant',
          type: 'Full-time',
          period: 'July 2024 – Present',
          description:
            "Responsible for administering the organization's Microsoft 365 environment (SharePoint, Teams, Exchange, and other services), providing internal technical support to employees (hardware, software, and equipment maintenance), managing the local server (backups and file server), and maintaining the network infrastructure.",
        },
        {
          title: 'IT Intern',
          type: 'Internship',
          period: 'April 2023 – July 2024',
          description:
            'Assisted in diagnosing and solving hardware, software, and network issues, configuring devices, and maintaining and monitoring systems.',
        },
      ],
    },
  ];

  education: Education[] = [
    {
      degree: "Bachelor's Degree in Information Systems",
      institution: 'Universidade Federal de Santa Catarina (UFSC)',
      status: 'In Progress',
    },
  ];

  certifications: Certification[] = [
    {
      name: 'Docker Fundamentals',
      issuer: 'learn.cantrill.io',
      issued: 'April 2025',
    },
    {
      name: 'AWS Educate Introduction to Cloud 101',
      issuer: 'Amazon Web Services (AWS)',
      issued: 'March 2025',
    },
    {
      name: 'Imersão Front-End 2ª Edição',
      issuer: 'Alura',
      issued: 'February 2025',
    },
    {
      name: 'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
      issuer: 'Alura',
      issued: 'January 2025',
    },
    {
      name: 'Imersão Dev Back-End',
      issuer: 'Alura',
      issued: 'December 2024',
    },
  ];

  currentYear: Number = new Date().getFullYear();
}
