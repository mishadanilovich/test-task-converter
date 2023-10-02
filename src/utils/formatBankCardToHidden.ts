const BANK_CARD_SEPARATOR = '-';
const HIDDEN_SYMBOL = '*';

export const formatBankCardToHidden = (bankCard: string): string => {
  const groups = bankCard.split(BANK_CARD_SEPARATOR);

  const hiddenGroups = groups.map((group, index) => {
    if (index === 0 || index === 2) return group.slice(0, 2) + HIDDEN_SYMBOL.repeat(2);

    if (index === groups.length - 1) return HIDDEN_SYMBOL.repeat(2) + group.slice(2, group.length);

    return HIDDEN_SYMBOL.repeat(4);
  });

  return hiddenGroups.join(BANK_CARD_SEPARATOR);
};
