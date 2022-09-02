import './style.scss';
import { Container, Label, Input, Button } from 'reactstrap';

const SearchBar = (props) => {
    const {
        name, 
        category, 
        handleChangeName, 
        handleSearch,
        handleEditSearch, 
        handleChangeCategory,
        disableForm,
        handleFocusInput,
        button,
        bgOverlay
    } = props;
    
    return (
        <section id='searchbar' searchbar={ !bgOverlay ? 'false' : 'true' }>
            <Container>
                <div className='search-wrapper'>
                    <div className={!!disableForm || !!button === true ? "search-title" : "d-none"}>
                        <h2>Pencarianmu</h2>
                    </div>
                    <div className='search-input-wrapper'>
                        <div className='search-input'>
                            <div>
                                <Label for="namaMobil">
                                    Nama Mobil 
                                </Label>
                                <Input
                                    id="namaMobil"
                                    placeholder="Ketik nama/tipe mobil"
                                    defaultValue={name}
                                    onFocus={handleFocusInput}
                                    onChange={(e) => handleChangeName(e)}
                                    disabled={!!disableForm || !!button === true ? 'disabled' : ''}
                                />
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label for="kategoriMobil">
                                    Kategori
                                </Label>
                                <Input
                                    id="kategoriMobil"
                                    type="select"
                                    defaultValue={category}
                                    onFocus={handleFocusInput}
                                    onChange={(e) => handleChangeCategory(e)}
                                    disabled={!!disableForm || !!button === true ? 'disabled' : ''}
                                >
                                    <option>
                                        2 - 4 orang
                                    </option>
                                    <option>
                                        4 - 6 orang
                                    </option>
                                    <option>
                                        6 - 8 orang
                                    </option>
                                </Input>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label for="hargaMobil">
                                    Harga
                                </Label>
                                <Input
                                    id="hargaMobil"
                                    name="price"
                                    type="select"
                                    disabled
                                >
                                    {/* <option>
                                        Masukan Harga Sewa per Hari
                                    </option>
                                    <option>
                                        < Rp. 400.000
                                    </option>
                                    <option>
                                        Rp. 400.000 - Rp. 600.000
                                    </option>
                                    <option>
                                        > Rp. 600.000
                                    </option> */}
                                </Input>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label for="statusMobil">
                                    Status
                                </Label>
                                <Input
                                    id="statusMobil"
                                    name="status"
                                    type="select"
                                    disabled
                                >
                                    {/* <option value={true}>
                                        True
                                    </option>
                                    <option value={false}>
                                        False
                                    </option> */}
                                </Input>
                            </div>
                        </div>
                        <div className={!!disableForm ? 'd-lg-none' : ''}>
                            <div className='search-button'>
                                <Button className={(!!button === true) ? 'btn-edit' : 'btn-success'} onClick={(!!button === true) ? handleEditSearch : handleSearch}>
                                    {(!!button === true) ? 'Edit' : 'Cari Mobil'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
 
export default SearchBar;