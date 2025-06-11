import { ServiceContent, ServiceTabs } from "@/types";

export const requestTabs: ServiceTabs[] = [
  { label: "Purchase requisition" },
  { label: "Request for proposal" },
  { label: "Invoice payment request" },
  { label: "New Vendor Request" },
];

export const requestContent: ServiceContent[] = [
  {
    label: "Purchase requisition",
    imageSrc: "/images/featuresPage/Purchase requisition.svg",
    data: [
      "Standardized single-source requests from scratch or warehouse inventory—fast and consistent.",
      "Streamlined intake with guided flows and customizable document forms.",
      "Requests auto-route to the right approvers using predefined rules and workflows.",
      "E-commerce-like experience with item catalogs, bulk imports, and custom item entries.",
      "Full control to approve, edit, revise, repeat, cancel, delete, or manually complete purchase requests.",
      "Track PRs by status and view complete revision history for full transparency.",
      "Add attachments, notes, and comments with tagging to keep your team in sync.",
    ],
  },
  {
    label: "Request for proposal",
    imageSrc: "/images/featuresPage/Request for proposal.svg",
    data: [
      "Quickly draft and send RFPs to vendors with prebuilt templates.",
      "Track vendor responses and evaluate proposals with scoring systems.",
      "Collaborate internally to compare bids and finalize selection.",
    ],
  },
  {
    label: "Invoice payment request",
    imageSrc: "/images/featuresPage/Invoice payment request.svg",
    data: [
      "Automate invoice submission and approval.",
      "Match invoices to POs and receipts for 3-way validation.",
      "Avoid duplicate or fraudulent payments with audit trails.",
    ],
  },
  {
    label: "New Vendor Request",
    imageSrc: "/images/featuresPage/New vendor request.svg",
    data: [
      "Request and approve new vendor onboarding.",
      "Collect documents and compliance data up front.",
      "Ensure centralized and standardized vendor intake process.",
    ],
  },
];

export const approveTabs: ServiceTabs[] = [
  { label: "Approval workflow" },
  { label: "Workflow scenario builder" },
  { label: "Document-based approvals" },
  { label: "Vendor approval" },
];

export const approveContent: ServiceContent[] = [
  {
    label: "Approval workflow",
    imageSrc: "/images/featuresPage/Purchase requisition.svg",
    data: [
      "Enable approvals by location, department, project, or any custom field for flexible workflows.",
      "Easily revise, reject, or send requests back for re-approval within the workflow.",
      "Maintain revision history for seamless compliance audits and accountability.",
      "Set thresholds and policies for accurate, rule-based routing of requests.",
      "Approve requests anytime, anywhere with mobile on-the-go approvals.",
    ],
  },
  {
    label: "Workflow scenario builder",
    imageSrc: "/images/featuresPage/Approval workflow.svg",
    data: [
      "Set up trigger-based approval flows for dynamic process automation.",
      "Define unlimited custom approval criteria to match your policies.",
      "Get smart workflow notifications via email, Slack, or your preferred channels.",
    ],
  },
  {
    label: "Document-based approvals",
    imageSrc: "/images/featuresPage/Approval workflow (1).svg",
    data: [
      "Create separate approval workflows for PRs, POs, Receipts, Invoices, and Expenses.",
      "Set up unlimited standalone approval scenarios for each document type.",
      "Add unlimited custom fields to tailor every document to your business needs.",
    ],
  },
  {
    label: "Vendor approval",
    imageSrc: "/images/featuresPage/Approval workflow (2).svg",
    data: [
      "Verify new vendors meet compliance and qualification standards before onboarding.",
      "Set custom approval workflows based on supplier categories for better control.",
      "Receive instant alerts for pending vendor requests to speed up decisions.",
      "Automatically capture data from W9s, SOC2 reports, tax certificates, and more.",
    ],
  },
];

export const orderTabs: ServiceTabs[] = [
  { label: "Purchase" },
  { label: "Invoice" },
  { label: "Receipt" },
];

export const orderContent: ServiceContent[] = [
  {
    label: "Purchase",
    imageSrc: "/images/featuresPage/Purchase.svg",
    data: [
      "Create purchase orders from scratch or auto-generate them from PRs and RFPs for seamless procurement.",
      "Access complete order data in one place—delivery, item details, payments, and supplier info.",
      "Keep internal attachments private and share external files seamlessly with suppliers.",
      "Flexible PO options—set as recurring, blanket, auto-send to suppliers, or revise after approval.",
      "Track orders in real time—from draft to approval to final payment—all in one system.",
    ],
  },
  {
    label: "Invoice",
    imageSrc: "/images/featuresPage/Invoice.svg",
    data: [
      "Create invoices independently or auto-generate from POs with one click.",
      "Track invoice status in real-time—draft, pending, paid, partially paid, canceled, or rejected.",
      "Automatically trigger matching and reapproval workflows for any discrepancies.",
      "Easily reconcile invoices using credit notes for smooth accounting.",
      "Access linked documents instantly for full visibility and audit readiness.",
    ],
  },
  {
    label: "Receipt",
    imageSrc: "/images/featuresPage/Receipt.svg",
    data: [
      "Manually create receipts or auto-generate them from POs in one click.",
      "Verify item quantities, units, prices, and delivery/invoice status with ease.",
      "Compare receipt data with POs and stock balance for accuracy.",
      "Download receipts as PDF or XLS for records or sharing.",
      "Add attachments, notes, and comments for complete documentation.",
    ],
  },
];

export const controlTabs: ServiceTabs[] = [
  { label: "Suppliers and items" },
  { label: "Budgets" },
  { label: "Reports" },
  { label: "3-way match" },
  { label: "Expenses" },
];

export const controlContent: ServiceContent[] = [
  {
    label: "Suppliers and items",
    imageSrc: "/images/featuresPage/Suppliers and items.svg",
    data: [
      "Maintain an unlimited supplier database for easy access, tracking, and vendor management.",
      "Supplier Portal enables direct collaboration between vendors and buyers within the system.",
      "Set specified payment terms including pre/post-payment percentages, credit periods, and more.",
      "Access an unlimited item catalog with support for bundles, categories, and unit management.",
      "Centralized contract repository with automatic expiration alerts to keep you informed.",
    ],
  },
  {
    label: "Budgets",
    imageSrc: "/images/featuresPage/Budgets.svg",
    data: [
      "Track budgets in real time with interactive dashboards featuring progress bars and pie charts.",
      "Create budgets by project, location, department, custom fields, or time periods.",
      "Set budget limits and monitor total, available, reserved, and used amounts.",
      "Leverage in-depth budget analytics for audits, reports, and financial planning.",
      "Easily import and manage bulk budgets across your organization.",
    ],
  },
  {
    label: "Reports",
    imageSrc: "/images/featuresPage/Reports.svg",
    data: [
      "Choose from visual charts, detailed XLSX exports, or fully custom reports.",
      "Build tailored reports with 150+ data points for smarter decision-making.",
      "Access dedicated reports for every module—documents, budgets, and more.",
      "Access dedicated reports for every module—documents, budgets, and more.",
      "Use 20+ filters to drill into real-time data in just two clicks.",
    ],
  },
    {
    label: "3-way match",
    imageSrc: "/images/featuresPage/3-way match.svg",
    data: [
      "Extract key details instantly with OCR powered by Google AI.",
      "Recognize complete document layouts for seamless data capture.",
      "Real-time matching of Purchase Orders, Receipts, and Invoices.",
      "Automatically detect and flag discrepancies across documents.",
      "Set and enforce supplier invoice tolerance rates with ease.",
    ],
  },
  {
    label: "Expenses",
    imageSrc: "/images/featuresPage/Expenses.svg",
    data: [
      "Track and manage employee expense reimbursements for trips, events, and more.",
      "Monitor corporate card spending by employee, department, or location.",
      "Easily reconcile employee payments with bank statements.",
      "Handle multi-currency expenses with item, document, and company-level currencies.",
      "Support for taxes, legal entities, and seamless accounting tool integration.",
    ],
  },
];
