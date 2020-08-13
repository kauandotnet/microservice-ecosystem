import { CharacterEntity }                  from './entities/character.entity';
import { EntityRepository, Repository }     from 'typeorm';
import { AccountEntity }                    from './entities/account.entity';
import { CHARACTER_FIELDS, CharacterModel } from '../../../lib/models/character.model';

@EntityRepository(CharacterEntity)
export class CharacterRepo extends Repository<CharacterEntity> {

  async getCharacterByName(name: string) {
    return await this.findOne({
      where: { name },
    });
  }

  async createCharacter(account: AccountEntity, model: CharacterModel) {
    let result = await this.getCharacterByName(name);
    if (!result) {
      let character = new CharacterEntity();
      for (let prop in model) {
        if (model.hasOwnProperty(prop)) {
          if (CHARACTER_FIELDS.includes(prop)) {
            character[prop] = model[prop];
          }
        }
      }
      character.account = account;
      await this.save(character, { reload: true });
      return { character };
    }
    return null;
  }
}
