import { Link } from "react-router-dom";
import AccountInfoBlock from "./AccountInfoBlock";
import InfoBlockItem from "./InfoBlockItem";

interface Props {
	userData: {
		nickname: string;
		email: string;
		dateReg: string;
	};
}

export default function AccountOverview({ userData }: Props) {
	return (
		<AccountInfoBlock title="Личные данные" LinkButton={<Link to={'/profile/personal-info'}>Управление &#8594;</Link>} style='ml-8'>
			<InfoBlockItem itemTitle="Имя пользователя" endItem={userData.nickname}/>
			<InfoBlockItem itemTitle="Электронная почта" endItem={userData.email}/>
			<InfoBlockItem itemTitle="Дата регистрации" endItem={userData.dateReg}/>
		</AccountInfoBlock>
	);
}
