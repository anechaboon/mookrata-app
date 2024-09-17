export default function Page({ params }) {
    return (
        <div>
            Test Page Param : { params.slug } / { params.id }
        </div>
    )
}