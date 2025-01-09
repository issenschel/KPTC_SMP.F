import { Link } from "react-router-dom";
import AccountInfoBlock from "./AccountInfoBlock";

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
			<div className="flex justify-between items-center mb-2 py-4">
				<h4 className="text-[#6b707b]">Имя пользователя</h4>
				<p className="text-[#3c3f44]">{userData.nickname}</p>
			</div>
			<div className="flex justify-between items-center mb-2 py-4">
				<h4 className="text-[#6b707b]">Электронная почта</h4>
				<p className="text-[#3c3f44]">{userData.email}</p>
			</div>
			<div className="flex justify-between items-center mb-2 py-4">
				<h4 className="text-[#6b707b]">Дата регистрации</h4>
				<p className="text-[#3c3f44]">{userData.dateReg}</p>
			</div>
		</AccountInfoBlock>
	);
}
