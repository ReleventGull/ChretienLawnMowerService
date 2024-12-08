

const ServiceCard = ({service}) => {
    return (
        <div className="serviceCard">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </div>
    )
}

export default ServiceCard