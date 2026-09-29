type props = {
    title: string;
}

export function InfoTag({ title }: props) {
return (
    <div className="w-fit bg-blue-100 px-1 py-1 rounded-md flex items-center justify-center gap-2 dark:bg-dark-blue border-2 border-gray-600 ">
            <p className="text-sm  font-semibold font-plus-jakarta text-primary-gray uppercase dark:text-gray-400">
                {title}
            </p>
    </div>
)
}
