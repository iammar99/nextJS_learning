import ClientComponentOne from "@/Components/(Interleaving)/Client-Component-one";
import ServerComponentOne from "@/Components/(Interleaving)/Server-Component-one";
// import ServerComponentOne from "@/Components/(Interleaving)/Server-Component-one";

export default function page() {
    return (
        <>
            <div>Interleaving page</div>
            <ClientComponentOne >
                <ServerComponentOne/>
            </ClientComponentOne >
            {/* <ServerComponentOne/> */}
        </>
    )
}
