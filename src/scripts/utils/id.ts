import { Types } from 'mongoose';

export const generateEmi3CompliantId = (
  countryCode: string,
  partyId: string,
  typeId: string | undefined,
) => {
  if (!countryCode) {
    throw Error('country_code is required for generating an eMI3 compliant id');
  }

  if (!partyId) {
    throw Error('party_id is required for generating an eMI3 compliant id');
  }

  const prepender = typeId ? `${countryCode}*${partyId}*${typeId}*` : `${countryCode}*${partyId}*`;
  const objectId = new Types.ObjectId().toString().toUpperCase();

  return `${prepender}${objectId}`;
};

export const generateUniqueId = () => new Types.ObjectId().toString().toUpperCase();
