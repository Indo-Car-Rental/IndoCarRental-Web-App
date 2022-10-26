import './style.scss';
import { Container, Label, Input, Button } from 'reactstrap';

const SearchBar = (props) => {
    const {
        name, 
        category,
        status,
        handleChangeName, 
        handleChangeStatus,
        handleSearch,
        handleEditSearch, 
        handleChangeCategory,
        disableForm,
        handleFocusInput,
        button,
        bgOverlay,
        handleChangePrice
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
                                    <option value="">
                                        Semua Kategori
                                    </option>
                                    <option value={"small"}>
                                        Small
                                    </option>
                                    <option value={"medium"}>
                                        Medium
                                    </option>
                                    <option value={"large"}>
                                        Large
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
                                    defaultValue=""
                                    onFocus={handleFocusInput}
                                    onChange={(e) => handleChangePrice(e)}
                                    disabled={!!disableForm || !!button === true ? 'disabled' : ''}
                                >
                                    <option value="">
                                        Semua Harga
                                    </option>
                                    <option value={1}>
                                        {'< Rp. 400.000'}
                                    </option>
                                    <option value={2}>
                                        {'Rp. 400.000 - Rp. 600.000'}
                                    </option>
                                    <option value={3}>
                                        {'> Rp. 600.000'}
                                    </option>
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
                                    defaultValue={status}
                                    onFocus={handleFocusInput}
                                    onChange={(e) => handleChangeStatus(e)}
                                    disabled={!!disableForm || !!button === true ? 'disabled' : ''}
                                >
                                    <option value={true}>
                                        Di sewa
                                    </option>
                                    <option value={false}>
                                        Tidak Disewa
                                    </option>
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