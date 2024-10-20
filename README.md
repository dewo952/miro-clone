# Miro Clone - Collaborative Online Whiteboard

Miro Clone is a web-based collaborative whiteboard application that enables teams, classrooms, and creators to brainstorm, plan, and visualize ideas seamlessly in real-time. Built for modern collaboration, this clone offers essential tools and a smooth user experience for working together on a shared canvas.

![Miro Clone Demo](./public/miro.gif)

## Features

- 🖊️ **Drawing Tools**: Includes text, sticky notes, rectangles, ellipses, and freehand drawing (pencil).
- 🧑‍🤝‍🧑 **Real-Time Collaboration**: Powered by **Liveblocks.io**, collaborate with your team in real-time, with live presence features.
- 🔑 **User Authentication**: Secure sign-up and login using **Clerk** for user management.
- 🗒️ **Sticky Notes**: Add sticky notes to brainstorm ideas or leave quick reminders.
- 🎨 **Shape Tools**: Insert rectangles and ellipses to organize or design diagrams.
- 🔄 **Keyboard Shortcuts**: Quickly access tools with intuitive shortcuts for faster workflow.
- 🛠️ **Customizable Canvas**: Flexible canvas powered by **Covex** for real-time editing and state management.
- 💳 **Stripe Integration**: Payments and subscriptions powered by **Stripe** for secure and flexible billing.

  ## Keyboard Shortcuts

  - **T** - Insert Text
  - **Ctrl + N** - Insert Sticky Note
  - **R** - Insert Rectangle
  - **O** - Insert Ellipse
  - **Ctrl + Shift + P** - Activate Pencil Tool

  ## Tech Stack

  - **Frontend**: React, Next.js, TypeScript
  - **Styling**: Tailwind CSS for responsive and customizable UI
  - **Real-Time Collaboration**: Liveblocks.io for syncing changes between users
  - **Authentication**: Clerk for user authentication and management
  - **Canvas State**: Covex for real-time canvas editing
  - **Payments & Subscriptions**: Stripe for handling payments and subscriptions

  ## Installation & Setup

  Follow these steps to run the Miro Clone locally:

  1.  **Clone the repository**:
      ```bash
      git clone https://github.com/dewo952/miro-clone.git
      ```
  2.  **Navigate into the project directory**:
      ```bash
      cd miro-clone
      ```
  3.  **Install dependencies**:
      ```bash
      npm install
      ```
  4.  **Set up environment variables for Clerk and Liveblocks.io in a .env.local file**:
      ```bash
      CONVEX_DEPLOYMENT=<your_convex_deployment_key>
      NEXT_PUBLIC_CONVEX_URL=<your_convex_public_url>
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
      CLERK_SECRET_KEY=<your_clerk_secret_key>
      LIVE_BLOCK_SECRET_KEY=<your_liveblock_secret_key>
      STRIPE_SECRET_API_KEY=<your_stripe_secret_api_key>
      STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret_key>
      NEXT_PUBLIC_APP_URL=<your_development_url>
      ```
  5.  **Start the Next-JS development server**:
      ```bash
      npm run dev
      # or
      yarn dev
      # or
      pnpm dev
      # or
      bun dev
      ```
  6.  **Start the Convex development server**:
      ```bash
      npm convex dev
      ```
  7.  **Open** your browser and visit `http://localhost:3000` to access the app.

  8.  **Note**: Change the `NEXT_PUBLIC_APP_URL` value based on your current development URL. When deploying, make sure to update it to the production URL.

  ## Contribution

  Feel free to fork the repository, open issues, or submit pull requests to improve the project. Contributions are always welcome!
