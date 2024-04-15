import { useCallback, useEffect, useState } from "react";
import { Languages } from "lucide-react";

import { useTranslation } from "react-i18next";

import { Button, DropdownMenu } from "components";

import { LANGS_MAP, TLangsValues } from "./consts";

const data = Object.values(LANGS_MAP).reduce(
  (acc, { label, value }) => {
    return [
      ...acc,
      {
        id: value,
        label,
      },
    ];
  },
  [] as { id: TLangsValues; label: string }[]
);

export function LangToggler() {
  const { t, i18n } = useTranslation("common", { keyPrefix: "lang" });

  const [currentLang, setCurrentLang] = useState<TLangsValues>(i18n.resolvedLanguage as TLangsValues);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function changeLanguage(lang: TLangsValues) {
      await i18n.changeLanguage(lang);
    }

    // eslint-disable-next-line no-console
    changeLanguage(currentLang).catch(console.error);
  }, [currentLang, i18n]);

  const onSelect = useCallback((item: (typeof data)[number]) => {
    setCurrentLang(item.id);
  }, []);

  return (
    <DropdownMenu
      isOpen={isOpen}
      onToggle={setIsOpen}
      position="bottom-right"
      data={data}
      onSelect={onSelect}
      selectedId={currentLang}
      triggerer={(props) => (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
          {...props}
        >
          <Languages className="icon" />
          <span className="sr-only">{t("iconLabel")}</span>
        </Button>
      )}
      itemRenderer={(item) => {
        return (
          <div className="my-1 px-3 py-1">
            <span>{item.label}</span>
          </div>
        );
      }}
    />
  );
}