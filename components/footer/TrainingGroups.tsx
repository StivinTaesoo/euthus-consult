import Link from "next/link";

function TrainingGroups() {
    return (
        <div>
            <h2 className="font-bold">Training Groups</h2>
            <div className="grid mt-2 grid-cols-2 items-center  gap-x-4 gap-y-2 lg:grid-cols-3">
                <Link href="https://chat.whatsapp.com/Gykam388hVjE4IN9PFzTE0">
                    <p>Taxpromax service </p>
                </Link>
                <Link href="https://chat.whatsapp.com/Gykam388hVjE4IN9PFzTE0">
                    <p>Tax Clarence Service </p>
                </Link>
                <Link href="https://chat.whatsapp.com/F5EZjTEpARf5XwH5NIShIn">
                    <p>Newspaper publication </p>
                </Link>
                <Link href="https://chat.whatsapp.com/C8Dx5lY8bhvGupk9RzMg6O">
                    <p>JTB TIN </p>
                </Link>
                <Link href="https://chat.whatsapp.com/F5EZjTEpARf5XwH5NIShIn">
                    <p>Facilitation of Scuml</p>
                </Link>
                <Link href="https://chat.whatsapp.com/Es5TWvCebsYEbpXzPz50iD">
                    <p>CAC Mentorship</p>
                </Link>
            </div>
        </div>
    );
}

export default TrainingGroups;
