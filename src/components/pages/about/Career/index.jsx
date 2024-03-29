// styles
import * as S from "./styles";

export const Career = ({ title, company, companyLink, date, skills }) => {
  return (
    <S.Container>
      {!!title && <p className="title">{title}</p>}

      {!!company && !!date && !!companyLink && (
        <S.CompanyAndDate>
          <a href={companyLink} target="_blank" rel="noreferrer">
            {company}
          </a>
          <span>∙</span>
          <span>{date}</span>
        </S.CompanyAndDate>
      )}

      {!!skills && (
        <S.Skills>
          <p>Skills:</p>
          <span>{skills}</span>
        </S.Skills>
      )}
    </S.Container>
  );
};
