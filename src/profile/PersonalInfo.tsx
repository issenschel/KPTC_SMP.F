import AccountInfoBlock from "./AccountInfoBlock";
import InfoBlockItem from "./InfoBlockItem";

interface Props {
	userData: {
		nickname: string;
		email: string;
		dateReg: string;
	};
}

export default function PersonalInfo({userData}: Props) {
    return (
        <AccountInfoBlock title="Личные данные" style="ml-8">
            <InfoBlockItem itemTitle="Имя пользователя" subTitle={userData.nickname}/>
            <InfoBlockItem itemTitle="Электорнная почта" subTitle={userData.email} endItem={<p className="text-[#4a88fc]">Поменять электорнную почту</p>}/>
            <InfoBlockItem itemTitle="Пароль" endItem={<p className="text-[#4a88fc]">Сменить пароль</p>}/>
        </AccountInfoBlock>
    );
}
