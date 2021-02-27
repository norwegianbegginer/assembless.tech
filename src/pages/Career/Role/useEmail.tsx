import { useRef } from "react";

export const useEmail = () => {
    const ref = useRef(null as unknown as (args: { [key: string]: any; }) => Promise<any>);

    if (ref.current === null) {
        const fn = async (args: { [key: string]: any; }) => {
            const url = new URL("https://us-central1-assembless-common.cloudfunctions.net/sendRecruitmentMail");

            Object.keys(args).forEach(key => {
                const value = args[key];
                url.searchParams.append(key, value);
            });

            console.log(url.toString());

            return await fetch(url.toString());
        };
        ref.current = fn;
    }

    return ref.current;
};
