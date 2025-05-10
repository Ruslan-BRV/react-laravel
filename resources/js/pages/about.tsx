import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Layout } from 'lucide-react';
import SettingsLayout from '@/layouts/settings/layout';
import AppHeaderLayout from '@/layouts/app/app-header-layout';


export default function About() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <SettingsLayout>
                <h2 className="text-xl font-semibold">Profile Settings</h2>
                <p>Здесь ты можешь изменить профиль.</p>
            </SettingsLayout>
            <div className="about-page">Привет, это страница about</div>
        </>
    )
}
