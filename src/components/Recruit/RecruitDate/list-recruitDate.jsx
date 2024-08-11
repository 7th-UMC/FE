import ItemRecruitDate from "./item-recruitDate";

const ListRecruitDate = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <ItemRecruitDate
                    key={index}
                    id={item.id}
                    name={item.name}
                    start={item.start}
                    bar={item.bar}
                    end={item.end}
                />
            ))}
        </>
    )
}

export default ListRecruitDate;