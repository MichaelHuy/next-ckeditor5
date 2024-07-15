'use client'

import 'ckeditor5/ckeditor5.css';
import '../App.css'

import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic'

const CustomEditor = dynamic(() => import('../components/CustomEditorCode'), { ssr: false })


export default function App() {

    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
        };
    }, []);

    return (
        <>
            {isMounted && (
                <CustomEditor />
            )}
        </>
    );
}
