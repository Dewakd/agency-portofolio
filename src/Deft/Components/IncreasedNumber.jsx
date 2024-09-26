import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from 'react';

export default function IncreasedNumber({ icon, number, title }) {
    const [displayNumber, setDisplayNumber] = useState(0); // State untuk menampilkan angka
    const ref = useRef(null); // Menggunakan ref untuk referensi elemen

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // Jika elemen terlihat
                    let start = 0; // Mulai dari angka 0
                    const end = number; // Angka akhir yang diinginkan
                    const duration = 20; // Durasi animasi dalam milidetik
                    const incrementTime = (duration / end) * 100; // Hitung waktu untuk setiap increment

                    const interval = setInterval(() => {
                        if (start < end) {
                            start += 1; // Tambah angka 1
                            setDisplayNumber(start); // Update state dengan angka baru
                        } else {
                            clearInterval(interval); // Hentikan interval setelah mencapai angka akhir
                        }
                    }, incrementTime);

                    observer.unobserve(ref.current); // Stop observing setelah animasi dimulai
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current); // Mulai mengamati elemen
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Hentikan mengamati saat unmount
            }
        };
    }, [number]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center text-center md:flex-row md:gap-3">
            <Icon icon={icon} className="w-[25px] md:w-[49px] md:h-[49px] h-[25px] text-red" />
            <div>
                <h1 className="text-2xl md:text-[30px] font-bold text-white font-poppins">{displayNumber}</h1>
                <p className="text-white text-[12px] font-roboto font-normal md:text-[14px]">{title}</p>
            </div>
        </div>
    );
}
