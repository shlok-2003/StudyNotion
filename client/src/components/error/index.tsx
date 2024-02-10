import { Link, useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError() as Error;

    return (
        <main className="grid place-items-center space-x-8">
            <h1 className="font-bold text-xl sm:text-2xl  md:text-4xl">
                Error ocurred: {error.message}
            </h1>

            <Link to="/">Return to Home</Link>
        </main>
    );
}
