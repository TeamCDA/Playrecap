import { useTranslation } from "react-i18next";

type TitleProps = {
  selectedYear: string;
  selectedConsole: string;
  games: number;
};

const TitleGamesList = ({
  selectedYear,
  selectedConsole,
  games,
}: TitleProps) => {
  const { t } = useTranslation();

  return (
    <div className="mb-3">
      <p className="text-2xl font-semibold">
        {t("FILTER.TITLE.GAMES")} {selectedYear}{" "}
        {selectedConsole !== "all" &&
          t("FILTER.TITLE.ON") + " " + selectedConsole}{" "}
        ({games})
      </p>
    </div>
  );
};

export default TitleGamesList;
