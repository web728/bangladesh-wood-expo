import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth';
import LoginForm from './LoginForm';
import '../admin.css';

export const metadata = { title: 'Admin login', robots: { index: false, follow: false } };

export default async function LoginPage() {
  if (await isAdmin()) redirect('/admin');
  return (
    <main className="admin-login">
      <div className="admin-login__card">
        <img src="/brand/bangladesh-wood-expo-11th-display.png" alt="Best CNC Presents Bangladesh Wood Expo, 11th Edition" width={180} height={145} />
        <h1>Team dashboard</h1>
        <p>Registrations, stand enquiries and gate check-in.</p>
        <LoginForm />
      </div>
    </main>
  );
}
